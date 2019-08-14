import Autosuggest from 'react-autosuggest';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { fade, makeStyles } from '@material-ui/core/styles';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import React from 'react';
import { useDebounce, useMount } from 'react-use';
import SearchCard from '../SearchCard';
import scryfall from '../../tools/scryfall';


const useStyles = makeStyles(theme => ({

  icon: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: theme.spacing(6),
  },

  root: {
    backgroundColor: fade(theme.palette.common.white, .15),
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, .25),
    },
  },

  searchContainer: {
    width: '100%',
  },

  searchInput: {
    color: 'inherit',
    width: '100%',
  },

  searchInputInput: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(6),
    width: '100%',
  },

  suggestion: {
  },

  suggestionHighlighted: {
  },

  suggestions: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    left: 0,
    marginTop: theme.spacing(1),
    maxHeight: '70vh',
    overflowY: 'auto',
    position: 'absolute',
    right: 0,
  },

  suggestionsList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
}));


export default function Search() {

  const classes = useStyles();
  const [ query, setQuery ] = React.useState('');
  const [ suggestions, setSuggestions ] = React.useState([]);

  const onChange = event => setQuery(event.target.value);

  const onSelect = (event, { suggestionValue }) => {
    console.log(suggestionValue);
  };

  const search = query => {
    if (query) {
      scryfall.search(query).then(response => setSuggestions(response));
    }
  };

  const inputProps = {
    autoFocus: true,
    classes: {input: classes.searchInputInput, root: classes.searchInput},
    onChange,
    placeholder: 'Search for cards...',
    value: query,
  };

  const inputTheme = {
    container: classes.searchContainer,
    suggestion: classes.suggestion,
    suggestionHighlighted: classes.suggestionHighlighted,
    suggestionsContainer: classes.suggestions,
    suggestionsList: classes.suggestionsList,
  };

  useDebounce(() => search(query), 100, [query]);

  useMount(() => search('Brainstorm'));

  return (
    <div className={classes.root}>
      <div children={<Icon color="white" path={mdiMagnify} size={1} />} className={classes.icon} />
      <Autosuggest
        alwaysRenderSuggestions
        getSuggestionValue={suggestion => suggestion.rootConditionReword || ''}
        inputProps={inputProps}
        onSuggestionSelected={onSelect}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value='' }) => value}
        renderInputComponent={props => <InputBase {...props} />}
        renderSuggestion={card => <SearchCard card={card} />}
        renderSuggestionsContainer={({ containerProps, children }) => (
          <Paper {...containerProps} children={children} elevation={12} />
        )}
        shouldRenderSuggestions={() => true}
        suggestions={suggestions}
        theme={inputTheme}
      />
    </div>
  );
}
