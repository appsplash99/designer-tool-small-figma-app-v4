import React, { useState } from 'react'

export const UserView = ({userViewProps}) => {
  return (
    <div 
      className="user-textbox" 
      id={userViewProps.mainObject.fontTemplateId}
      style={{
        backgroundColor: userViewProps.mainObject.bgColor, 
        color: userViewProps.mainObject.txtColor
      }}
      >
        <h1 
          style={{ 
            fontSize:userViewProps.mainObject.headingSize+'px', 
            fontFamily: userViewProps.mainObject.headingFont 
          }} 
        >Heading</h1>
        <p 
          style={{ 
            fontSize:userViewProps.mainObject.paraSize+'px', 
            fontFamily: userViewProps.mainObject.paraFont 
          }} 
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in metus venenatis, facilisis turpis id, hendrerit justo. Aenean sit amet leo suscipit, aliquam nisl et, interdum nulla. Aenean nisl sem, posuere eu lacinia at, commodo vitae ante. Phasellus et varius dolor. In molestie in velit vitae rutrum. Quisque id magna lacus.</p>
      </div>
  );
}