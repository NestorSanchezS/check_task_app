import React from 'react'


export const TodoHeader = ({children, loading}) => {
  return (
    <header>
        {React.Children
            .toArray(children)
            .map(item => React.cloneElement(item, {loading}))}
    </header>
  )
}
