'use client';
import {Card, Divider, Subtitle, Text} from "@tremor/react";
import Citypicker from "@/components/CItyPicker/Citypicker";
import CityPicker from "@/components/CItyPicker/Citypicker";

export default function Home() {
    return (
        //flex min-h-screen flex-col items-center justify-between p-24
        <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E p-10 flex flex-col] flex flex-col justify-center items-center
        ">
            <Card className={'max-w-4xl mx-auto'}>
                <Text className={"font-bold text-center mb-10 text-6xl"}>
                    Mental Health
                </Text>
                <Subtitle className={"text-xl text-center"}>
                    Powered by Algo-Spinner
                </Subtitle>
                <Divider className={'my-10'}/>
                <Card className={'bg-gradient-to-br from-[#394F68] to-[#183B7E]'}>
                    <CityPicker/>
                </Card>
            </Card>

        </div>
    )
}
