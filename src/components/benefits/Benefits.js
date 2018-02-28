import React from 'react';
import PropTypes from 'prop-types';
import GridList from 'material-ui/GridList';
import * as categories from '../../constants/categoriesTypes';

import SingleLineCategory from './SingleLineCategory';


const Categories = [
    {title:"תרבות", categoryType: categories.CULTURE_CATEGORY_VALUE},
    {title:"חשמל ומחשבים", categoryType: categories.ElECTRONICS_CATEGORY_VALUE},
    {title:"אופנה", categoryType: categories.FASHION_CATEGORY_VALUE},
    {title:"אוכל", categoryType: categories.FOOD_CATEGORY_VALUE},
    {title:"לבית", categoryType: categories.FOR_HOME_CATEGORY_VALUE},
    {title:"כללי", categoryType: categories.GENERAL_CATEGORY_VALUE},
    {title:"מתנות", categoryType: categories.GIFTS_CATEGORY_VALUE},
    {title:"ילדים", categoryType: categories.KIDS_CATEGORY_VALUE},
    {title:"למשרד", categoryType: categories.OFFICE_CATEGORY_VALUE},
    {title:"אופטיקה", categoryType: categories.OPTIC_CATEGORY_VALUE},
    {title:"בעלי מקצוע", categoryType: categories.PROFESSIONALS_CATEGORY_VALUE},
    {title:"ספורט", categoryType: categories.SPORT_CATEGORY_VALUE},
    {title:"תיירות", categoryType: categories.TOURISM_CATEGORY_VALUE}
    
];


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'stretch',
        alignItems: 'center',
        alignContent: 'space-around',
        flexDirection: 'column',
        backgroundColor: '#e0e0e0',
        padding: 4
    },
    gridList: {
        maxWidth: '100%',
        justifyContent: 'center',
        width: '100%',
        overflowY: 'inherit',
        height: '100%'
    }
};

function filterBenefitsByCategory (benefits, category) {
    const categoryList = benefits.filter( (item) =>
    item.categories.some((x) => x === category.categoryType));
    return categoryList.slice(0,5);
}

const Benefits = (props) =>{
    return (

    <div style={styles.root}>
        <GridList style={styles.gridList}>
            {Categories.map(category => 
                <SingleLineCategory key={category.categoryType} title={category.title} category={category.categoryType} benefits={filterBenefitsByCategory(props.benefits, category)}/>
            )}
        </GridList>

    </div>
    );
};


Benefits.propTypes = {
     benefits: PropTypes.array.isRequired
};

export default Benefits;