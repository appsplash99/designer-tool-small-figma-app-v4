import React, { useState } from 'react'
/* Below import works because of index.js in components directory */
import {UserControl, UserView, FontTemplates, } from './components'
import './App.css'

function App() {
  // v1 - used four useStates
  // v2 - used just one usesState with object
  // v3 - v2 + variable font-style + font-style template
  // v4 - TODO: CHANGE FONT PAIR STYLE ONCLICK + seperated components
  const [mainObject, setMainObject] = useState({
    'headingSize': 30,
    'paraSize': 18,
    'headingFont' : "Roboto, sans-serif",
    'paraFont' : "Roboto, sans-serif",
    'fontTemplateId' : "",
    'bgColor': "#ffffff",
    'txtColor': "#000000",
  });

  //  font-size management for headingButton
  const incHSize = () => {  // increment button onClickHandler
    setMainObject({...mainObject, 'headingSize': mainObject['headingSize'] + 8 })
  }
  const decHSize = () => {  // decrement button 
    setMainObject({...mainObject, 'headingSize': mainObject['headingSize'] - 8 })
  }
  //  font-size management for paragraphButton
  const incPSize = () => {  // increment button 
    setMainObject({...mainObject, 'paraSize': mainObject['paraSize'] + 8 })
  }
  const decPSize = () => {  // decrement button 
    setMainObject({...mainObject, 'paraSize': mainObject['paraSize'] - 8 })
  }

  // drop-down onChange eventHandler
  const handleOnChangeHFont = (e) => { // change headingFont
    setMainObject({...mainObject, 'headingFont': e.target.value})
  }
  const handleOnChangePFont = (e) => { // change paraFont
    setMainObject({...mainObject, 'paraFont': e.target.value})
  }

  // OnCLick handlers for seperate font templates

  const handleOnClickFontTemplate1 = (e) => {
    setMainObject({
      ...mainObject,
      'headingFont' : "Ubuntu, sans-s",
      'paraFont' : "Mulish, sans-serif",
      'bgColor': "#FCE77D",
      'txtColor': "#F91617",
    });
  }

  const handleOnClickFontTemplate2 = (e) => {
    setMainObject({
      ...mainObject,
      'headingFont' : "BioRhyme, serif",
      'paraFont' : "Indie Flower, cursive",
      'bgColor': "#3D155F",
      'txtColor': "#DF678C",
    });
  }

  const handleOnClickFontTemplate3 = (e) => {
    setMainObject({
      ...mainObject,
      'headingFont' : "Cairo, sans-serif",
      'paraFont' : "Dancing Script, cursive",
      'bgColor': "#243665",
      'txtColor': "#8BD8BD",
    });
  }

  // props for all components
  const userControlProps={
    incHSize,
    decHSize,
    incPSize,
    decPSize,
    handleOnChangeHFont,
    handleOnChangePFont,
  }

  const userViewProps={
    mainObject,
  }

  const fontTemplatesProps={
    mainObject,
    handleOnClickFontTemplate1,
    handleOnClickFontTemplate2,
    handleOnClickFontTemplate3,
  }

  return (
    <div className="App">
      <h1 style={{fontFamily: "Lato, sans-serif"}} >designer tool (small figma)</h1>

      <h2 className="label-text" >Font Style Control</h2>
      {/* CONTROL */}
      <UserControl userControlProps={userControlProps}/>

      {/* USER TEXT */}
      <UserView userViewProps={userViewProps} />
      
      <h2 className="label-text" >Choose a font-pair-style</h2>
      {/* FONT TEMPLATES */}
      <FontTemplates fontTemplatesProps={fontTemplatesProps}/>
      
    </div>
  )
}

export default App
