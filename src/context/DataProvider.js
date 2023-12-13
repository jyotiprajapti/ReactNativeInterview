import React, { createContext, useState } from 'react'
const data = [
    { id: '1', title: 'Item 1', description: 'Description 1', image: 'https://reactnative.dev/img/tiny_logo.png' },
    { id: '2', title: 'Item 2', description: 'Description 2', image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg' },
    { id: '3', title: 'Item 3', description: 'Description 3', image: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80' },
    { id: '4', title: 'Item 4', description: 'Description 4', image: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667' },
    { id: '5', title: 'Item 5', description: 'Description 5', image: 'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702425600&semt=ais' },
    { id: '6', title: 'Item 6', description: 'Description 6', image: 'https://reactnative.dev/img/tiny_logo.png' },
    { id: '7', title: 'Item 7', description: 'Description 7', image: 'https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg' },
    { id: '8', title: 'Item 8', description: 'Description 8', image: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667' },
  ];//array of objects to render in teh list

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [items, setItem] = useState(data)
    return (
        <DataContext.Provider value={{
            items, setItem,
        }} >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;