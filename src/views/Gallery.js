// import GetCards from "./data/GetCards"
// import Tooltip from "../hooks/Tooltip"
import '../style.css'
import Card from "./Card"
import {DataContext} from "../contexts/DataContext";
import React, {useContext} from 'react'
// const data = [
//     {
//         id: 1,
//         name: "Island",
//         by: "Zane",
//         image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
//         mainAttack: "tentacles",
//         specialAttack: "mind reading"
//     }, {
//         id: 2,
//         name: "Forest",
//         by: "Lauren",
//         image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
//         mainAttack: "claws",
//         specialAttack: "sneezing"
//     }, {
//         id: 3,
//         name: "Whale",
//         by: "Phil",
//         image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
//         mainAttack: "brain washing",
//         specialAttack: "drowing"
//     }, {
//         id: 4,
//         name: "Mountain",
//         by: "Casey",
//         image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
//         mainAttack: "anxiety",
//         specialAttack: "mind reading"
//     }, {
//         id: 5,
//         name: "Boat",
//         by: "Katie",
//         image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
//         mainAttack: "barbed tail",
//         specialAttack: "lightning strike"
//     }, {
//         id: 6,
//         name: "Flowers",
//         by: "Korleki",
//         image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
//         mainAttack: "venom",
//         specialAttack: "more venom"
//     }, {
//         id: 7,
//         name: "Fire",
//         by: "Eleanor",
//         image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf",
//         mainAttack: "eating whole",
//         specialAttack: "tongue slinging"
//     }, {
//         id: 8,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     }, {
//         id: 9,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     }, {
//         id: 10,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     }, {
//         id: 11,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     }, {
//         id: 12,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     }, {
//         id: 13,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     }, {
//         id: 14,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     }, {
//         id: 15,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     },{
//         id: 16,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     },{
//         id: 17,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     },{
//         id: 18,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     },{
//         id: 19,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     },{
//         id: 20,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     },{
//         id: 21,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     },{
//         id: 22,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     },{
//         id: 23,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     },{
//         id: 24,
//         name: "Garden",
//         by: "Jordan",
//         image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
//         mainAttack: "parasitic",
//         specialAttack: "poison"
//     }];


const styles={
    gridContainer:{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gridGap: "10px 10px",
        justifyItems: "stretch",
        justifyContent: 'space-evenly',
        marginTop: "2vh"
    },
    card: {
        cursor: "pointer",
        overflow: "hidden",
    }
}

export default function Gallery(){
    const data = useContext(DataContext)

    return (
        <div className="container" style={styles.gridContainer}>
            {data.map((data) => {
                return <Card data={data} key={data.id} style = {styles.card} bool={true} />
            })}
        </div>
    );

}
