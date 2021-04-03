# PokemonFrontendChallenge

## Preview
  https://b1iz0.github.io/PokemonFrontendChallenge/

## Frontend test assignment
  * Single Page app displaying ALL Pokemon with their avatar, stats, basic information and type
  * Filter Pokemon by Type(Water, Electric etc) 
  * Clicking on a Pokemon reveals their moves list and evolution information

## Deployment and a brief code walk-through
   It is a web-app that was developed using the ReactJS library. Also modular design was used to create convenient app architecture. This app uses bootstrap and react-bootstrap
   
   You can find two folder in the project package. There are 'public' and 'src'. 
   Public folder contains index.html file that is an application entry point, src folder contains the main script index.js and 'components' folder
   One more folder in src is services, this folder contains js file of class that is used to get data from PokemonApi.
   
   In turn, 'component' folder contains all components that are used by app. All component folders contains at least 3 files: css, index.js, js component file.
   Index.js file is used for export components, js component file is used to define the components, css file is used for components styles.
   
   Some words about components. 
   There are:  
   * app 
   * error-loading
   * pokemon-info
   * pokemon-info-base
   * pokemon-list-item
   * pokemon-list
   * pokemon-stats
   * pokemon-type-filter
   * search-panel
   * spinner 
  
   App component is just app skeleton. Error-loading component is used to inform user that smth goes wrong. Pokemon-info is used to show some information 
   about pokemon, this component uses pokemon-info-base and pokemon-stats components.
   Pokemon-info-base is used to show some base information of a selected pokemon, pokemon-stats define stats of a selected pokemon. Pokemon-list is used to show list of all pokemons to user, also it uses pokemon-list-item
   component that defines every pokemon in list. Pokemon-type-filter and search-panel use for filtration of list. Spinner component is used to show process of pokemons loading progress.
   
