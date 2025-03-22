export default function Contact() {
    //styling for the contact page and form
    const styles = {
        div: {
            backgroundColor: 'var(--verdigris)',
            height: '100vh',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
        },
    };
    return (
        // returns form elements for Contact page
        // with strict requirements for name, email, and message fields
        <div style = {styles.div}>
            <form style={styles.form}>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required></input>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};