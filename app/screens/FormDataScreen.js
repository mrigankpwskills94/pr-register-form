// ... existing imports
import { View, Text, StyleSheet } from "react-native";

const FormDataScreen = ({ route }) => {
    // Extract the form data from the route params
    const { formData } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Form Data</Text>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{formData.name}</Text>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Age:</Text>
                <Text style={styles.value}>{formData.age}</Text>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Gender:</Text>
                <Text style={styles.value}>{formData.gender}</Text>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{formData.email}</Text>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Password:</Text>
                <Text style={styles.value}>{formData.password}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 35,
        margin: 10,
    },
    heading: {
        marginBottom: 20,
        fontSize: 24,
        fontWeight: "bold",
    },
    fieldContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
        flexBasis: "30%",
    },
    value: {
        flex: 1,
        fontSize: 16,
    },
});

export default FormDataScreen;
