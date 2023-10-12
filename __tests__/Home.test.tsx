import { render, screen } from '@testing-library/react'
import Home from '@/app/page'


describe('Home', () => {
    it('Should have the word "Docs" in the page', () => {
        render(<Home />) //Arrange
        const myElement = screen.getByText('Docs') //Act
        expect(myElement).toBeInTheDocument() //Assert
    })
})