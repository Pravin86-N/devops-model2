pipeline{
    agent any

    stages{
        stage('Checkout'){
            steps{
                git branch :'main',
                url :'https://github.com/Pravin86-N/devops-model2.git'
            }
        }
        stage('Install'){
            steps{
                bat 'npm install'
            }
        }
        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }
    }
}