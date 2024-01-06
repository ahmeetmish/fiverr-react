import styled from 'styled-components';

export const SignUpBoard = styled.div`
    color: #FFF;
    padding: 80px 0 0 0;

    .container {
        display: flex;
        padding: 0 80px;
        align-items: center;
        justify-content: space-between;
        background-color: #45091b;

        .content {  
            h2 {
                font-size: 42px;
                margin-bottom: 36px;

                span {
                    font-weight: 400;
                    font-style: italic;
                    font-family: 'Lucida Sans',sans-serif;
                }
            }

             a {
                border-radius: 4px;
                padding: 12px 24px;
                background-color: #1dbf73;
            }
        }

        .image {

        }
    }
`