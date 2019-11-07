pipeline {
    stages {
        stage('Test') {
            agent {
                docker { image 'node:12-alpine' }
            }

            steps {
                sh 'node --version'
                sh 'node --version'
                sh 'npm i'
                sh 'npm test'
            }
        }
    }
}
