pipeline{
    agent any
    environment {
        DOCKER_IMAGE = 'nestjs-app'

    }

    stages{
        stage('Checkout'){
            steps{
                checkout scm

            }

        }

        stage('Build'){
            steps{
                script{
                    docker.build("$DOCKER_IMAGE:latest")
                }

            }

        }

        stage('Deploy'){
            steps{
                script{
                    sh 'docker stop my-nestjs-app || true'
                }

            }
        }

    }

    post{
        always{
            echo 'Pipeline execution complete.'
        }

    }

}