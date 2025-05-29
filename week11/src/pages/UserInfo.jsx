import styled from "styled-components"
import UserSection from "../components/UserSection"
import UserFilter from "../components/UserFilter"
import { useState } from "react";


const UserInfo = () => {
    const [filter, setFilter] = useState("all");
    const [curPage, setCurPage] = useState(1);
    const [userData, setUserData] = useState([]);

  return (
    <MainLayout>
      <h1>🦁13기 아기사자 리스트🦁</h1>
      <ContentBox>
            <UserFilter setFilter={setFilter} setUserData={setUserData} setCurPage={setCurPage} />

            <UserSection filter={filter} userData={userData} curPage={curPage} setUserData={setUserData} setCurPage={setCurPage} />
      </ContentBox>
    </MainLayout>
  )
}

export default UserInfo

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h1{
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 1rem;
    border : 5px solid #FF7710;
`