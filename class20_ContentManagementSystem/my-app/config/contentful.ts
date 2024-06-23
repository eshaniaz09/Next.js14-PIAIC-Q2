const contentful = require('contentful')

export const client = contentful.createClient({
  space: 'ixoq0rbtko9n',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'Wau81TWOONSsFwCle6MF60_HXeKdvi697RAgH7-A1NI'
})

client.getEntry('2foPytHOphkqmPqzw4kdj4')
  .then((entry: any) => console.log(entry))
  .catch(console.error)