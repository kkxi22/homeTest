import styled from 'styled-components'

export const HomeWrapper = styled.div`
  height: calc(100vh - 92px - 64px);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .main-title {
      text-align: center;
      font-size: 30px;
      color: #777776;
      /* max-width: 400px; */
    }
  
    .sub-title {
      text-align: center;
      color: #7b7b7b;
      margin: 20px 0;
    }

    .invite-btn {
      width: 150px;
    }
  }

`