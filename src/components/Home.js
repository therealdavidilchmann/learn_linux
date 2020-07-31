import React, { useState } from 'react';

import CategoryTable from './CategoryTable'

import '../css/home.css'

function Home(props) {


  return (
    <div className="home">
      <CategoryTable data={props.categories} />
    </div>
  );
}

export default Home;
