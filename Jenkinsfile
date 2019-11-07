pipeline {
    agent none

    environment {
        registryCredential = "dockerhub"
    }

    stages {
        stage('Test') {
            agent {
                docker { image 'node:12-alpine' }
            }

            steps {
                sh 'node --version'
                sh 'npm i'
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build "wdalmut/sky-app1:$BUILD_NUMBER"
                }
            }
        }
        stage('Push Image') {
            steps {
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
