// .../app/screens/FormContainer.js

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from "react-native-reanimated";

const FormContainer = () => {
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});
    const opacity = useSharedValue(0);

    React.useEffect(() => {
        opacity.value = withTiming(1, { duration: 500, easing: Easing.linear });
    }, [opacity]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    const validateForm = () => {
        const { name, age, email, password, gender } = formData;
        const errors = {};

        if (!name) {
            errors.name = "Name is required.";
        }
        if (!email) {
            errors.email = "Email is required.";
        } else if (!isValidEmail(email)) {
            errors.email = "Invalid email format.";
        }

        if (!age) {
            errors.age = "Age is required.";
        } else if (!isValidAge(age)) {
            errors.age = "Invalid age format.";
        }

        if (!gender) {
            errors.gender = "Gender is required.";
        }

        if (!password) {
            errors.password = "Password is required.";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const isValidAge = (age) => {
        const ageRegex = /^[0-9]{1,2}$/;
        return ageRegex.test(age);
    };

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        password: "",
    });

    const handleInputChange = (name, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        // Clear the corresponding error when the user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = () => {
        if (validateForm()) {
            navigation.navigate("FormData", { formData });
            setFormData({
                name: "",
                age: "",
                gender: "",
                email: "",
                password: "",
            });
        }
    };

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <Text style={styles.header}>Registration Form</Text>
            {/* Text input fields */}
            // We will change this to reflect validation errors
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={formData.name}
                onChangeText={(value) => handleInputChange("name", value)}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Age"
                value={formData.age}
                onChangeText={(value) => handleInputChange("age", value)}
                keyboardType="numeric"
            />
            {errors.age && <Text style={styles.error}>{errors.age}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Gender"
                value={formData.gender}
                onChangeText={(value) => handleInputChange("gender", value)}
            />
            {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={(value) => handleInputChange("email", value)}
                keyboardType="email-address"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={formData.password}
                onChangeText={(value) => handleInputChange("password", value)}
                secureTextEntry
            />
            {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button title="Next" onPress={handleSubmit} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 35,
        margin: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 24,
        color: "#333",
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        height: 40,
        borderColor: "#ccc",
        borderRadius: 25,
        paddingHorizontal: 15,
        backgroundColor: "#f8f8f8",
        color: "#333",
    },
    error: {
        color: "red",
        marginBottom: 10,
    },
});

export default FormContainer;
