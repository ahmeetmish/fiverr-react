import styled from 'styled-components';

export const ProjectCard = styled.div`
    width: 320px;
    height: 320px;
    cursor: pointer;
    color: #191919;
    position: relative;
    border-radius: 4px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .user {
        left: 0;
        gap: 12px;
        bottom: 0;
        width: 100%;
        padding: 8px 12px ;
        display: flex;
        position: absolute;
        align-items: center;
        background-color: #FFF;

        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }

        .text {
            p {
                font-size: 14px;
                font-weight: 500;
            }

            span {
                color: #999999;
                font-size: 14px;
            }
        }
    }
`