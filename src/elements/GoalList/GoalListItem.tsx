import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors, FontSize, Spacing } from '../../../utils/Styles'
import Tag from '../Tag/Tag'

interface Props {
    title: string,
    tagTitle: string,
    funds: number | string,
    currency?: string
}

const GoalListItem = ({ title, tagTitle, funds, currency = "KES" }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ContentView}>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={styles.TitleText}>{title}</Text>
                    <Text style={styles.fundsText}>{`${currency} ${funds}`}</Text>
                </View>
                <View style={styles.TagView}>
                    <Tag title={tagTitle} />
                </View>
            </View>
            <View style={styles.IconView}>
                <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
            </View>
        </View>
    )
}

export default GoalListItem

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: Spacing.general,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: Spacing.general
    },

    IconView: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        height: '100%',
        borderLeftColor: Colors.offWhite,
        borderLeftWidth: 1
    },

    ContentView: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: Spacing.general * 2
    },
    TagView: {
        justifyContent: 'center',
    },

    TitleText: {
        fontSize: FontSize.miniTitle,
        color: Colors.primary,
        fontWeight: 'bold'
    },
    fundsText: {
        fontSize: FontSize.footNote,
        color: Colors.grey
    }


})
