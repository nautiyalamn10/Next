import Link from "next/link";

export default function(){
    return(
        <>
        <Link href='/'>Home</Link>
        <Link href='/static-page'>Static</Link>
        <Link href='/interactive-page'>Interactive</Link>
        </>
    )
}