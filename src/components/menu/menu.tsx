import React from 'react'

// interface iMenu3{
//     icon: string,
//     text: string,
//     link:string,

// interface iMenu2{
//     buttons: iMenu3,
//     links: [],
// }

// interface iMenu3{
//     buttons:[],
//     links: [],
// }

export function Menu({ menu: { links, buttons } }: any) {
    return (
        <>
            <div>
                {
                    links.map((link: any) => <>{link.text}</>)
                }
            </div>
            <div>
                {
                    buttons.map((button: any) => <>{button.text}</>)
                }
            </div>
        </>
    )
}