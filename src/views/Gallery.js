import '../style.css'
import Card from "./Card"
import {DataContext} from "../data/GetCards";
import React, {useContext} from 'react'
import image1 from "../images/1.jpg"
import useShuffle from '../hooks/useShuffle'



const fabData = [
    {
        id: 1,
        name: "Island",
        by: "Zane",
        image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
        mainAttack: "tentacles",
        specialAttack: "mind reading",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"
    },{
        id: 2,
        name: "Forest",
        by: "Lauren",
        image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
        mainAttack: "claws",
        specialAttack: "sneezing",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    },{
        id: 3,
        name: "Whale",
        by: "Phil",
        image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
        mainAttack: "brain washing",
        specialAttack: "drowing",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    },{
        id: 4,
        name: "Mountain",
        by: "Casey",
        image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
        mainAttack: "anxiety",
        specialAttack: "mind reading",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    },{
        id: 5,
        name: "Boat",
        by: "Katie",
        image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
        mainAttack: "barbed tail",
        specialAttack: "lightning strike",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    },{
        id: 6,
        name: "Flowers",
        by: "Korleki",
        image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
        mainAttack: "venom",
        specialAttack: "more venom",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    },{
        id: 7,
        name: "Fire",
        by: "Eleanor",
        image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf",
        mainAttack: "eating whole",
        specialAttack: "tongue slinging",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    }, {
        id: 8,
        name: "Garden",
        by: "Jordan",
        image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
        mainAttack: "parasitic",
        specialAttack: "poison",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    }, {
        id: 9,
        name: "Garden",
        by: "Jordan",
        image: "https://images.theconversation.com/files/365975/original/file-20201028-15-xtazrw.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        mainAttack: "parasitic",
        specialAttack: "poison",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    },{
        id: 10,
        name: "Garden",
        by: "Jordan",
        image: "https://bloody-disgusting.com/wp-content/uploads/2020/08/where-sea-monsters-roam-steve-alten.png",
        mainAttack: "parasitic",
        specialAttack: "poison",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    },{
        id: 11,
        name: "Garden",
        by: "Jordan",
        image: image1,
        // image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
        mainAttack: "parasitic",
        specialAttack: "poison",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    },{
        id: 12,
        name: "Garden",
        by: "Jordan",
        image: "https://i.guim.co.uk/img/media/dc98d14d8acc9f965c8c163ac6db1856335cd451/130_0_2022_1213/master/2022.jpg?width=700&quality=85&auto=format&fit=max&s=92418c4f52fc71e42b6982f857891f85",
        mainAttack: "parasitic",
        specialAttack: "poison",
        mythos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sodales dolor. Vivamus vitae tristique augue. In hac habitasse platea dictumst. Nullam lobortis, dolor nec venenatis viverra, massa nibh tincidunt diam, eu convallis magna ante a libero. Vestibulum posuere maximus erat nec tempus. Suspendisse potenti. Nam sollicitudin nisl massa, nec molestie ligula dapibus quis. Pellentesque mollis auctor augue eu porta. Donec luctus bibendum eros, eu pharetra urna pharetra ut. Duis sed erat eget urna tempus finibus ut at tellus.",
        year: "2021"

    }];


const styles={
    gridContainer:{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gridGap: "10px 10px",
        justifyItems: "stretch",
        justifyContent: 'space-evenly',
        marginTop: "2vh"
    },
    card: {
        cursor: "pointer",
        overflow: "hidden",
        alignContent: "center",


    }
}

export default function Gallery(){
    // const data = useContext(DataContext)
    const data = fabData
    const dataShuffled = useShuffle(data)


    return (
        <div className="container" style={styles.gridContainer}>
            {dataShuffled.map((data, index) => {

                return (
                    <li key={index}>
                        <Card
                            data={data}
                            style={styles.card}
                            bool={true}
                        />
                    </li>
                )
            })}
        </div>
    );

}
