import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
//import LocationButton from './buttons/LocationButton';

import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import LocationOn from 'material-ui-icons/LocationOn';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
//import IconButton from 'material-ui/IconButton';



function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.couponName, query);
  const parts = parse(suggestion.couponName, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

const styles = theme => ({
    root:{
        display:'flex',
        flexDirection: 'row',
        flexWrap:'nowrap',
        justifyContent: 'space-around',
        width: '70%',
        height: '48.1%',
        alignItems: 'center',
        backgroundImage: 'url("../../img/searchBackground.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'round'
    },
  container: {
    display: 'flex',
    height: '43%',
    width: '64%',
    direction: 'RTL',
    backgroundColor: 'white'

  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: '2.23%',
    width: '44.2%',
    maxHeight: '32%',
    marginBottom: theme.spacing.unit * 3,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  input: {
    marginRight: '2%'
  },
  button: {
    width: '17%',
    height: '50%',
    backgroundColor: '#199147',
    marginLeft: '12%'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
});

class BenfitsSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
          };
    }

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
  
    return inputLength === 0
      ? []
      : this.props.benefits.filter(benefit => {
          const keep =
            count < 4 && benefit.couponName.toLowerCase().slice(0, inputLength) === inputValue;
  
          if (keep) {
            count += 1;
          }
  
          return keep;
        });
  }

  getSuggestionValue = (suggestion) => {
    return suggestion.couponName;
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleSelectedSuggestion = (event, { suggestion }) => {
      const benefitId = suggestion._id;
      this.props.history.push('/benefit/' + benefitId);
      this.setState({ value: '', });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
        <Button className={classes.button} variant="raised" color="primary">
        <LocationOn className={classes.leftIcon}/>
        חפש לפי מיקום
      </Button>
        <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={this.handleSelectedSuggestion}
        inputProps={{
          classes,
          placeholder: 'אני מחפש',
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
      </div>
    );
  }
}

BenfitsSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  benefits: PropTypes.array.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default compose(
    withRouter,
    withStyles(styles, { name: 'BenfitsSearch' }),
    connect(mapStateToProps, null)
)(BenfitsSearch);

function mapStateToProps(state) {
    return {
      benefits: state.benefits
    };
  }


