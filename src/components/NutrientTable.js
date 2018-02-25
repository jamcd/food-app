import React, { Component } from 'react';

class NutrientTable extends Component {
  render () {
    return (
      <table className="nutrient-table">
        <thead>
        <tr>
          <th>Nutrient</th>
          <th>
            <span className="food-icon--banana">Banana</span>
          </th>
          <th>
            <span className="food-icon--apple">Apple</span>
          </th>
          <th>
            <span className="food-icon--bacon">Bacon</span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Vitamin A</td>
          <td>10.4mg</td>
          <td>12.3mg</td>
          <td>1.1mg</td>
        </tr>
        <tr>
          <td>Vitamin B</td>
          <td>10.4mg</td>
          <td>12.3mg</td>
          <td>1.1mg</td>
        </tr>
        <tr>
          <td>Vitamin C</td>
          <td>10.4mg</td>
          <td>12.3mg</td>
          <td>1.1mg</td>
        </tr>
        <tr>
          <td>Vitamin D</td>
          <td>10.4mg</td>
          <td>12.3mg</td>
          <td>1.1mg</td>
        </tr>
        <tr>
          <td>Vitamin E</td>
          <td>10.4mg</td>
          <td>12.3mg</td>
          <td>1.1mg</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default NutrientTable;
