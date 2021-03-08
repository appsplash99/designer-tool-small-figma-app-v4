import React, { useState } from 'react'

export const UserControl = ({userControlProps}) => {
  return (
    <div className="bordered-box" >
        <div className="text-control">
          <div className="flex-item" >
            <h3 >For Heading Text</h3>
            <div>
              <button onClick={userControlProps.incHSize}>+</button>
              <button onClick={userControlProps.decHSize}>-</button>
            </div>
            <h3>Heading font</h3>
            <select className="drop-down" onChange={userControlProps.handleOnChangeHFont}>
              <option value="Roboto Mono, monospace">Roboto</option>
              <option value="BioRhyme, serif">BioRhyme</option>
              <option value="Cairo, sans-serif">Cairo</option>
              <option value="Lato, sans-serif">Lato</option>
              <option value="Titillium Web, sans-serif">Titillium Web</option>
              <option value="Ubuntu, sans-s">Ubuntu</option>
            </select>
          </div>
          <div className="flex-item" >
            <h3>For Paragraph Text</h3>
            <div>
              <button onClick={userControlProps.incPSize} >+</button>
              <button onClick={userControlProps.decPSize} >-</button>
            </div>
            <h3>Paragraph font</h3>
            <select className="drop-down" onChange={userControlProps.handleOnChangePFont}>
              <option value="Roboto Mono, monospace">Roboto</option>
              <option value="Dancing Script, cursive">Dancing Script</option>
              <option value="Kreon, serif">Kreon</option>
              <option value="Mulish, sans-serif">Mulish</option>
              <option value="Indie Flower, cursive">Indie Flower</option>
              <option value="Work Sans, sans-serif">Work Sans</option>
            </select>
          </div>
        </div>
      </div>
  );
}