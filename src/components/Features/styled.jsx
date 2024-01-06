import styled from 'styled-components';

export const Features = styled.div`
    padding: 80px;
    background-color: #f1fdf7;

    .container {
        gap: 64px;
        display: flex;
        justify-content: space-between;

        .content {
            h2 {
                font-size: 26px;
                margin-bottom: 16px;
            }

            .features-list {
                gap: 20px;
                display: flex;
                flex-direction: column;

                div {
                    span {
                        gap: 8px;
                        display: flex;
                        font-size: 17px;
                        font-weight: 700;
                        align-items: center;
                        margin-bottom: 4px;

                        img {
                            width: 22px;
                            height: 22px;
                        }
                    }

                    p {
                        max-width: 45ch;
                    }
                }
            }
        }

        .video {
            video {
                width: 700px;
                height: 420px;
            }
        }
    }
`