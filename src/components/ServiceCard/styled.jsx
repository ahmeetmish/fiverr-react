import styled from 'styled-components';

export const ServiceCard = styled.div`
    width: 250px;
    height: 340px;
    color: #FFF;
    cursor: pointer;
    position: relative;
    border-radius: 4px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    span {
        top: 15px;
        left: 15px;
        font-weight: 300;
        position: absolute;
    }
    
    p {
        top: 40px;
        left: 15px;
        font-size: 20px;
        font-weight: 500;
        position: absolute;
    }
`