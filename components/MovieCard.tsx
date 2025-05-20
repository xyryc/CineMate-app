import { icons } from '@/constants/icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const MovieCard = ({ id, poster_path, title, vote_average, release_date, original_language }: Movie) => {

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                {/* poster image */}
                <Image source={{
                    uri: poster_path ?
                        `https://image.tmdb.org/t/p/w500/${poster_path}`
                        :
                        "https://placehold.co/600x400/1a1a1a/ffffff.png"
                }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />

                {/* title */}
                <Text numberOfLines={1} className='text-sm font-bold text-white mt-2'>{title}</Text>

                {/* rating */}
                <View className='flex-row items-center justify-start gap-x-1 mt-1'>
                    <Image source={icons.star} className='size-4' />
                    <Text className='text-white text-xs font-bold uppercase'>{Math.round(vote_average)}/10</Text>
                </View>

                {/* genre */}
                <View className='flex-row items-center justify-start gap-4 mt-1'>
                    <Text className='text-xs text-light-300 font-medium'>{release_date?.split("-")[0]}</Text>
                    <Text className='text-xs text-light-300 font-medium capitalize'>{original_language}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard