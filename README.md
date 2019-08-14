# Delores

Website for Delores.

--------------------------------

### Architecture

Data in `src/server/resources` serves as a seed into a MongoDB database (which can be hosted in MLab or MongoDB Atlas, for example). At a higher level, the React app in `src/client` pulls in this information and renders the data on a map based via the Google Maps JavaScript API. As this is not a React-based API, some smart event listener and object management has to happen on the frontend for markers to properly be mounted and unmounted from the Google Maps map instance.

Filters in the form are used to update Redux state which then informs which markers to display and what other things to render on the map (for example, the user's location and a ring of specified radius around the user.
