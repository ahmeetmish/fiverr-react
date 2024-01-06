import styled from 'styled-components';

export const Header = styled.header`
    top: 0;
    color: #FFF;
    padding: 20px 0;
    position: sticky;
    transition: all 0.5s ease;
    background-color: #013914;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            font-size: 26px;
            font-weight: 700;

            .logo-dot {
                color: #1dbf73;
            }
        }

        nav {
            gap: 12px;
            display: flex;
            font-weight: 500;
            align-items: center;

            button {
                padding: 4px 12px;
                border-radius: 4px;
                border: 1px solid #FFF;

                &:hover {
                    border-color: #1dbf73;
                    background-color: #1dbf73;
                }
            }
        }

        .user {
            gap: 8px;
            display: flex;
            cursor: pointer;
            position: relative;
            align-items: center;

            img {
                width: 32px;
                height: 32px;
                object-fit: cover;
                border-radius: 50%;
            }

            .user-options {
                gap: 4px;
                right: 0;
                top: 47px;
                width: 160px;
                display: flex;
                font-size: 15px;
                padding: 4px 8px;
                font-weight: 400;
                color: #191919;
                border-radius: 4px;
                position: absolute;
                flex-direction: column;
                background-color: #FFF;
                border: 1px solid #ebebeb;
            }
        }

        .sub-nav {
            display: flex;
            color: #d6d6d6;
            font-weight: 400;
            align-items: center;
            padding: 12px 0 0 0;
            justify-content: space-between;
        }
    }

    &.active {
        color: #191919;
        background-color: #FFF;
    }
`