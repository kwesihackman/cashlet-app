import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../utils/Styles'

interface IHeaderProps {
    username: string
    totalFunds: number | string
    currency: string
}

const Header = ({ username, totalFunds, currency }: IHeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.greetingsText}>Afternoon <Text style={styles.username}>{username}</Text></Text>
            <Text style={styles.footNote}>Here's the latest</Text>
            <Text style={styles.fundsText}>{`${currency} ${totalFunds}`}</Text>
            <Text style={styles.footNote}>Total funds</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 180,
        flexDirection: 'column',
        backgroundColor: Colors.primary,
        padding: Spacing.general * 2
    },
    greetingsText: {
        color: Colors.offWhite,
        fontSize: FontSize.title,
        marginVertical: Spacing.general
    },
    username: {
        color: Colors.white,
        fontSize: FontSize.title,
    },

    footNote: {
        color: Colors.offWhite,
        fontSize: FontSize.normal
    },

    fundsText: {
        color: Colors.green,
        fontSize: FontSize.title,
        marginTop: Spacing.general,
        fontWeight: '900'
    }

})
