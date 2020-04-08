import React from 'react';
import Autosuggest from 'react-autosuggest';
import { useDebounce } from 'react-use';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import SearchCard from '../SearchCard';
import scryfall from '../../tools/scryfall';
import useStyles from './styles';


export default function Search() {

  const classes = useStyles();
  const [ query, setQuery ] = React.useState('');
  const [ input, setInput ] = React.useState('');
  const [ suggestions, setSuggestions ] = React.useState([]);
  const [ thinking, setThinking ] = React.useState(false);

  const onChange = (event, { newValue }) => {
    setThinking(true);
    setInput(newValue);
    setQuery(newValue);
  };

  const onReset = () => {
    setSuggestions([]);
    setThinking(false);
  };

  const search = query => {
    if (query) {
      setThinking(true);
      scryfall.search(query).then(response => {
        setSuggestions(response);
        setThinking(false);
      });
    }
  };

  const inputProps = {
    autoFocus: true,
    classes: {input: classes.searchInputInput, root: classes.searchInput},
    onChange,
    placeholder: 'Search for cards...',
    value: input,
  };

  const inputTheme = {
    container: classes.searchContainer,
    suggestion: classes.suggestion,
    suggestionHighlighted: classes.suggestionHighlighted,
    suggestionsContainer: classes.suggestions,
    suggestionsList: classes.suggestionsList,
  };

  useDebounce(() => search(query), 500, [query]);

  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        {thinking
         ? <CircularProgress color="inherit" size={20} />
         : <Icon color="white" path={mdiMagnify} size={1} />
        }
      </div>
      <Autosuggest
        getSuggestionValue={(card = {}) => card.name}
        inputProps={inputProps}
        onSuggestionsClearRequested={onReset}
        onSuggestionsFetchRequested={() => {}}
        renderInputComponent={props => <InputBase {...props} />}
        renderSuggestion={card => <SearchCard card={card} />}
        renderSuggestionsContainer={({ children, containerProps }) => (
          children && <Paper {...containerProps} children={children} elevation={12} />
        )}
        suggestions={suggestions}
        theme={inputTheme}
      />
    </div>
  );
}
