import styled from 'styled-components'
import { getPerPage } from '../apis/userlist.js';

const PageSelection = ({curPage, setCurPage, setUserData, filter}) => {

    const handleClick = async(page) => {
        if(filter === "all"){
            const response = await getPerPage(page);
            setUserData(response);
        }
        setCurPage(page);
    };

  return (
    <SelectionLayout>
        {[1,2,3,4,5,6].map((val) =>
            <PageBox
            key={val}
            $active={val === curPage ? true:false}
            onClick={() => handleClick(val)}>
            {val}</PageBox>
        )
        }

    </SelectionLayout>
  )
}

export default PageSelection

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
    &:hover{
        cursor: pointer;
        color: #C9C9C9;
    }
`