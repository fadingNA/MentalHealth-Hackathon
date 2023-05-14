'use client';
import {useState} from "react";
//const {useState} = React;
//const {useEffect} = React;
import Select from 'react-select';
import {Text} from "@tremor/react";
import {Country, State, City} from 'country-state-city';
import {GlobeIcon} from "@heroicons/react/solid";
import {useRouter} from "next/navigation";

// improve this one tonight Non.

type option = { // no advantage to declare type.
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    },
    label: string;
} | null;

type CityOption = {
    value: {
        latitude: string;
        longitude: string;
        countryCode: string;
        name: string;
        stateCode: string;
    },
    label: string;
} | null;

const options = Country.getAllCountries().map(country => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name,
}));

function CityPicker() {
    // @ts-ignore
    const [selectedCountry, setSelectedCountry] = useState<option>(null);
    // @ts-ignore
    const [selectedCity, setSelectedCity] = useState<CityOption>([]);

    const router = useRouter();

    // useEffect here

    // we can map over empty array.

    function handleSelectedCountry(option: option) {
        setSelectedCountry(option);
    }

    function handleSelectedCity(option: CityOption) {
        setSelectedCity(option)
        router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
    }

    return (
        <div className={'space-y-4'}>
            <div className={'space-y-2'}>
                <div className={'flex items-center space-x-2 text-blue-400'}>
                    <GlobeIcon className={'h-5 w-5 mr-2'}/>
                    <Text className={'text-amber-50 text-lg flex justify-start'}>
                        Country
                    </Text>
                </div>
                <Select
                    className={"text-black"}
                    value={selectedCountry}
                    onChange={handleSelectedCountry}
                    options={options}/>
            </div>
            {selectedCountry && (
                <div className={'space-y-2'}>
                    <div className={'flex items-center space-x-2 text-blue-400'}>
                        <GlobeIcon className={'h-5 w-5 mr-2'}/>
                        <Text className={'text-amber-50 text-lg flex justify-start'}>
                            City
                        </Text>
                    </div>
                    <Select
                        className={'text-black'}
                        value={selectedCity}
                        onChange={handleSelectedCity}
                        options={City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map((state) => ({
                            value: {
                                latitude: state.latitude!,
                                longitude: state.longitude!,
                                countryCode: state.countryCode,
                                name: state.name,
                                stateCode: state.stateCode,
                            },
                            label: state.name,
                        }))}
                    />
                </div>
            )}
        </div>
    )
    // in addition to that use api, I should have function not sit inside the useEffect.
    // Triggered function api call the city,
}

export default CityPicker;

