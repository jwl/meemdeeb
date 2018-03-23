# meemdeeb

A simple searchable and taggable meme database.

## Description


## How to Use:

### Backend:
* change to `backend` directory
* `npm run start` or `npx nodemon app`
* open `localhost:4000` in a browser

## Schema

### Meme
* `memeId` (int): id number
* `url` (String): imgur or giphy URL
* `tags` (tag): arbitrary number of tags
* `dateAdded` (date): date originally added
* `dateLastModified` (date): date last modified

### Tag
* `tagId` (int): id number
* `tagName` (String): name of tag


# References
* https://github.com/iamshaunjp/graphql-playlist
* https://www.howtographql.com/graphql-js/1-getting-started/
