import styled from 'styled-components';

export const Footer = styled.footer`
    color: #505050;
    border-top: 1px solid #ebebeb;

    .container {
        .footer {
            gap: 16px;
            opacity: 0.9;
            display: flex;
            padding: 16px 0;
            justify-content: space-between;

            & > * {
                gap: 6px;
                display: flex;
                flex-direction: column;

                span {
                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }

        .sub-footer {
            display: flex;
            padding: 16px 0;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #ebebeb;

            .left {
                gap: 16px;
                display: flex;
                align-items: center;

                h2 {
                    opacity: 0.9;
                }

                span {
                    font-size: 14px;
                }
            }

            .right {
                gap: 8px;
                display: flex;

                img {
                    width: 22px;
                    height: 22px;
                }

                span {
                    font-size: 15px;
                    font-weight: 500;
                    padding-left: 16px;
                }
            }
        }
    }
`