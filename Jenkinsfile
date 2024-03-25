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
                script {
                    // Define your image name and tag
                    def imageTag = "latest"
                    def fullImageName = "${DOCKER_IMAGE}:${imageTag}"

                    // Step 1: Remove the old image if it exists
                    // 'docker images -q' gets the image ID for the specified image name and tag
                    sh(script: "docker images -q ${fullImageName} | xargs -r docker rmi", returnStatus: true)

                    // Step 2: Build the new image
                    sh "docker build -t ${fullImageName} ."
                }

            }

        }

    }

}