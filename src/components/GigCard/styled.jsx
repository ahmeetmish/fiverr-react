import styled from 'styled-components';

export const GigCard = styled.div`
    width: 300px;
    height: 360px;
    color: #191919;
    border: 1px solid #c4c4c4;

    img {
        width: 100%;
        height: 50%;
        object-fit: cover;
    }

    .information {
        gap: 8px;
        padding: 8px;
        display: flex;
        flex-direction: column;

        .user {
            gap: 8px;
            display: flex;
            align-items: center;

            img {
                width: 32px;
                height: 32px;
                border-radius: 50%;
            }

            span {
                font-size: 14px;
                font-weight: 500;
                padding-left: 4px;
            }
        }

        p {
            opacity: 0.8;
            font-size: 15px;
        }

        .rating {
            gap: 4px;
            display: flex;
            align-items: center;

            img {
                width: 24px;
                height: 24px;
            }

            span {
                font-size: 14px;
                color: #d1b515;
                font-weight: 500;
            }
        }
    }

    .details {
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #cacaca;

        img {
            width: 24px;
            height: 24px;
        }

        div {
            gap: 4px;
            display: flex;
            font-size: 14px;

            p {
                font-weight: 600;
            }
        }
    }
`