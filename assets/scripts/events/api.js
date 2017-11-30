'use strict'

const config = require('../config')
const store = require('../store')

const createEvent = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const eventIndex = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const eventSearch = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/events/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const eventUpdate = function (data) {
  console.log(data.id)
  return $.ajax({
    url: config.apiOrigin + '/events/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createEvent,
  eventIndex,
  eventSearch,
  eventUpdate
}