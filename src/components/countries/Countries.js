import React, { Component } from 'react';
import Country from './Country';
import css from './countries.module.css';
export default function Countries(props) {
  const { Countries } = props;
  return (
    <div className={`${css.border} ${css.flexRow}`}>
      {Countries.map((country) => {
        return <Country country={country} />;
      })}
    </div>
  );
}
