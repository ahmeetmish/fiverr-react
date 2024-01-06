import styled from 'styled-components';

export const Hero = styled.div`
    background-color: #013914;

    .container {
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .content {
            gap: 24px;
            display: flex;
            flex-direction: column;

            h2 {
                font-size: 48px;

                span {
                    font-weight: 400;
                    font-style: italic;
                    font-family: 'Lucida Sans', sans-serif;
                }
            }

            .searchbar {
                width: 630px;
                display: flex;
                align-items: center;
                border-radius: 4px;
                background-color: #FFF;
                justify-content: space-between;

                input {
                    width: 100%;
                    opacity: 0.7;
                    border: none;
                    padding: 12px;
                    border-radius: 4px;

                    &:focus {
                        outline: none;
                    }
                }

                button {
                    padding: 8px 16px;
                    border-radius: 0 4px 4px 0;
                    background-color: #1dbf73;

                    img {
                        width: 24px;
                        height: 32px;
                    }
                }
            }

            .popular {
                gap: 8px;
                display: flex;
                align-items: center;

                p {
                    font-weight: 500;
                }

                button {
                    font-size: 14px;
                    font-weight: 500;
                    padding: 2px 12px;
                    border-radius: 16px;
                    border: 1px solid #FFF;
                    transition: all 0.3s ease;

                    &:hover {
                        color: #191919;
                        background-color: #FFF;
                    }
                }
            }
        }

        .image {
            height: 100%;
            position: relative;

            img {
                height: 100%;
                object-fit: contain;
            }

            .char-info {
                gap: 8px;
                bottom: 16px;
                right: -230px;
                display: flex;
                padding: 8px 16px;
                position: absolute;
                align-items: center;
                border-radius: 32px;
                border: 1px solid #FFF;
                backdrop-filter: blur(30px);
                background: hsla(0,0%,100%,.14);

                img {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background-color: #ffdfd6;
                }

                div {
                    font-size: 12px;

                    span {
                        font-weight: 500;
                    }
                }
            }
        }
    }
`