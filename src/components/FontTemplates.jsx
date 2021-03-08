import React, { useState } from 'react'

export const FontTemplates = ({fontTemplatesProps}) => {
  return (
    <div className="bordered-box">
        <div className="font-templates-container">
          <div 
            className="font-template-card"
            id="font-style-1"
            onClick={fontTemplatesProps.handleOnClickFontTemplate1} 
          >
            <h1 style={{fontFamily: "Ubuntu, sans-s"}} >Heading Style</h1>
            <p style={{fontFamily: "Mulish, sans-serif"}} >Aenean sit amet leo suscipit, aliquam nisl et, interdum nulla.</p>
          </div>
          <div 
            className="font-template-card"
            id="font-style-2"
            onClick={fontTemplatesProps.handleOnClickFontTemplate2}
          >
            <h1 style={{fontFamily: "BioRhyme, serif"}} >Heading Style</h1>
            <p style={{fontFamily: "Indie Flower, cursive"}} >Aenean sit amet leo suscipit, aliquam nisl et, interdum nulla.</p>
          </div>
          <div 
            className="font-template-card"
            id="font-style-3"
            onClick={fontTemplatesProps.handleOnClickFontTemplate3}
          >
            <h1 style={{fontFamily: "Cairo, sans-serif"}} >Heading Style</h1>
            <p style={{fontFamily: "Dancing Script, cursive"}} >Aenean sit amet leo suscipit, aliquam nisl et, interdum nulla.</p>
          </div>
        </div>
      </div>
  );
}