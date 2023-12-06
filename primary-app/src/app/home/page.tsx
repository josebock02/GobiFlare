import React from 'react';
import styles from '../page.module.css';
import Link from 'next/link';
// import Logo from './Logo';
// import Button from './Button';
import Image from 'next/image'
import { Flex, Bold, Card, Title, Text, Metric, BarList, Badge, AreaChart} from "@tremor/react";

const data = [
  {
    name: "12:04",
    value: 456,
    color: "orange",
  },
  {
    name: "4:05",
    value: 191,
    
  }
];

//home page
const home = () => {
  return (
    <>
      <div className="w-full h-20 bg-neutral-600 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <Link href="/functions">
                  <p>Functions list</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    <Flex flexDirection='col'>
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Card>
          <Flex>
            <Card style={{minWidth: "5px"}}>
                <Title>Invocations</Title>
            </Card>
            <Card> {/** Dot chart */}
              <Flex flexDirection='row'>
                <Badge color={"blue"}>.</Badge>  
                <Badge color={"orange"}>.</Badge>  
                <Badge color={"orange"}>.</Badge>  
                <Badge color={"orange"}>.</Badge>  
                <Badge color={"orange"}>.</Badge>  
                <Badge color={"orange"}>.</Badge>  
                <Badge color={"orange"}>.</Badge>  
              </Flex>
            </Card>  
            <Card style={{minWidth: "350px"}} className="max-w-lg"> {/** Avg. duration chart */}
              <Flex className="mt-4">
                <Text>
                  <Bold>Avg. duration</Bold>
                </Text>
              </Flex>
              <BarList data={data} className="mt-1" />
            </Card>
            <Flex flexDirection='col' > {/** Column w. cold calls and avg. init time */}
              <Card decoration="left" decorationColor='gray'>
                <Metric>20</Metric>
                <Text>cold calls/wk</Text>
              </Card>
              <Card decoration="left" decorationColor='gray'>
                <Metric>120ms</Metric>
                <Text>init time</Text>
              </Card>
            </Flex>
          </Flex>
        </Card>
      </div>
    </Flex>
    </>
  );
};

export default home;
