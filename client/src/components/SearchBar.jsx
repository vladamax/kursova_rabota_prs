import styled from "styled-components"
import { useRef } from "react"

const SearchComp = styled.input`
  padding: 0.5rem;
  margin: 0;
  background: transparent;
  font-size: 1.1rem;
  color: white;
  border: 0;
  outline: 0;
`

const Close = styled.span`
  cursor: pointer;
  padding: 0.2rem 1rem;
  user-select: none;
`

const Holder = styled.form`
  display: inline-block;
  border-radius: 5px;
  border: 3px solid #ccc;
`

const Wrapper = styled.div`
  text-align: center;
  margin: 0.5rem 0;
`

function SearchBar(props) {
  const { searchTerm, setSearchTerm, onSubmit } = props
  const x = useRef()
  const submitForm = e => {
    e.preventDefault();
    onSubmit(searchTerm);
  }

  const resetSearch = () => {
    setSearchTerm("")
    x.current.focus()
  }

  return (
    <Wrapper>
      <Holder onSubmit={submitForm}>
        <SearchComp
          ref={x}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Close onClick={resetSearch}>&times;</Close>
      </Holder>
    </Wrapper>
  )
}

export default SearchBar
