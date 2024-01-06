import styled from 'styled-components';

export const Gig = styled.div`
    .container {
        /* flex: 2; */
        gap: 32px;
        display: flex;
        padding: 24px 120px;
        justify-content: space-between;

        .content {
            /* flex: 1; */
            gap: 16px;
            display: flex;
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

            .user {
                gap: 12px;
                display: flex;
                align-items: center;

                img {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                }

                .user-details {
                    gap: 4px;
                    display: flex;
                    flex-direction: column;

                    .information {
                        gap: 4px;
                        display: flex;
                        align-items: center;

                        p {
                            font-weight: 600;
                        }

                        span {
                            font-size: 14px;

                            &:hover {
                                text-decoration: underline
                            }
                        }
                    }
                }

                .rating {
                    gap: 4px;
                    display: flex;
                    align-items: center;

                    img {
                        width: 18px;
                        height: 18px;
                    }

                    span {
                        font-size: 14px;
                        text-decoration: underline;
                    }
                }
            }

            .gig {
                gap: 32px;
                display: flex;
                flex-direction: column;

                img {
                    width: 580px;
                }

                .gig-about {
                    h3 {
                        opacity: 0.8;
                        margin-bottom: 12px;
                    }

                    p {
                        font-size: 14px;
                        max-width: 67ch;
                        line-height: 24px;
                    }
                }
            }
        }

        .sidebar {
            /* flex: 1; */
            gap: 8px;
            width: 380px;
            height: 360px;
            padding: 24px 12px;
            border: 1px solid #e2e2e2;
            display: flex;
            flex-direction: column;

            .packages {
                .actions {
                    display: flex;
                    margin-bottom: 12px;

                    button {
                        width: 100%;
                        height: 42px;
                        font-weight: 500;
                        border: 1px solid #e2e2e2;
                        background-color: #f3f3f3;

                        &.active {
                            font-weight: 600;
                            background-color: #FFF;
                        }
                    }
                }

                .package-details {
                    gap: 8px;
                    display: flex;
                    padding: 4px 12px;
                    flex-direction: column;
                }

                .category {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    p {
                        font-weight: 600;
                    }

                    span {
                        font-weight: 500;
                    }
                }

                .description {
                    font-size: 15px;
                }

                .delivery {
                    gap: 8px;
                    display: flex;
                    align-items: center;

                    span {
                        font-size: 14px;
                        font-weight: 600;
                    }
                }

                .list {
                    opacity: 0.8;
                    font-size: 15px;
                    padding-left: 18px;
                }

                .continue {
                    color: #FFF;
                    background-color: #191919 !important;
                }
            }
        }
    }

    @media(max-width: 1090px){
        .container {
            padding: 24px 32px;
        }
    }
`