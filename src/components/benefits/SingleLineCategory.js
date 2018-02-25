import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import benefitImage from '../../img/benefit.jpg';
import BenefitCard from './BenefitCard';
import Card from 'material-ui/Card';
import CategoryHeader from '../CategoryHeader';
import '../../styles/categorygridtile.css';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
    maxWidth: '96%',
    minWidth: '96%',
    backgroundColor: '#f5f5f5',
    padding: '15px',
    margin: 10,
    height: '50%'
  },
  gridList: {
    flexWrap: 'nowrap',
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function SingleLineGridList(props) {
  const { classes } = props;
  const { benefits, title, category } = props;

  return (
    <Card className={classes.root}>
      <CategoryHeader title={title} category={category}/>
      <GridList className={classes.gridList} cols={2.5}>
        {benefits.map(benefit => (
          <GridListTile className="gridTile" key={benefit._id}>
            <img src={benefitImage} alt={benefit.CouponName} />
            <BenefitCard key={benefit._id} benefit={benefit}/>
            />
          </GridListTile>
        ))}
      </GridList>
    </Card>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  benefits: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default withStyles(styles)(SingleLineGridList);