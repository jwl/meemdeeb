# meemdeeb

A simple searchable and tagable meme database.

## Description


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
