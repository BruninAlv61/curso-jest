const { getUser } = require('../src/api.js')

test('Debe devolver un usuario simulado', async () => {
    globalThis.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => Promise.resolve({ id: 1, name: 'Bruno' })
        })
    })

const user = await getUser(1)

expect(user).toEqual({ id: 1, name: 'Bruno' })
expect(fetch).toHaveBeenCalledTimes(1)
expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1')
})
