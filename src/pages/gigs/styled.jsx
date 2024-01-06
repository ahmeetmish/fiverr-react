import styled from 'styled-components';

export const Gigs = styled.div`
    .container {
        gap: 12px;
        display: flex;
        padding: 32px 0;
        flex-direction: column;

        .navigation {
            font-size: 14px;
            
            span {
                opacity: 0.4;
            }

            a:hover {
                padding-bottom: 2px;
                border-bottom: 1px solid #b6b6b6;
            }
        }

        .page-desc {
            display: flex;
            align-items: center;
            padding-bottom: 12px;
            justify-content: space-between;
            border-bottom: 1px solid #cfcfcf;

            .left {
                h2 {
                    font-size: 28px;
                }

                p {
                    opacity: 0.8;
                    font-size: 15px;
                }
            }

            .right {
                gap: 8px;
                display: flex;
                position: relative;
                align-items: center;

                div {
                    gap: 4px;
                    display: flex;
                    cursor: pointer;
                }

                span {
                    font-weight: 600;
                }

                .sort-menu {
                    gap: 4px;
                    right: 0;
                    top: 30px;
                    padding: 12px;
                    display: flex;
                    position: absolute;
                    z-index: 1;
                    border-radius: 4px;
                    flex-direction: column;
                    background-color: #FFF;
                    border: 1px solid #e9e8e8;

                    span {
                        opacity: 0.8;
                        cursor: pointer;
                    }
                }
            }      
        }

        .gigs {
            gap: 16px;
            display: flex;
            margin: 24px 0;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
        }
    }
`